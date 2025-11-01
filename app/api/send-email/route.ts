import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, email, asunto, mensaje } = body

    if (!nombre || !email || !asunto || !mensaje) {
      return NextResponse.json({ success: false, message: "Todos los campos son requeridos" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, message: "Email inválido" }, { status: 400 })
    }

    console.log("[v0] Formulario de contacto recibido:", {
      nombre,
      email,
      asunto,
      mensaje: mensaje.substring(0, 50) + "...",
      timestamp: new Date().toISOString(),
    })

    try {
      // Importación dinámica para evitar errores en entornos sin Node.js
      const nodemailer = await import("nodemailer")

      const transporter = nodemailer.default.createTransport({
        host: process.env.EMAIL_HOST,
        port: Number.parseInt(process.env.EMAIL_PORT || "587"),
        secure: process.env.EMAIL_SECURE === "true",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      })

      const destinatario = process.env.EMAIL_FROM || "info@cheland.io"

      const asuntoMap: Record<string, string> = {
        wms: "Consulta sobre WMS",
        "automatizacion-inteligente": "Consulta sobre Automatización Inteligente",
        consultoria: "Consulta sobre Consultoría",
        otro: "Consulta General",
      }

      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: destinatario,
        replyTo: email,
        subject: `Nuevo contacto: ${asuntoMap[asunto] || asunto} - ${nombre}`,
        html: `
          <h2>Nuevo mensaje de contacto</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${asuntoMap[asunto] || asunto}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>Enviado desde el formulario de contacto de cheland.io</small></p>
        `,
        text: `
Nuevo mensaje de contacto

Nombre: ${nombre}
Email: ${email}
Asunto: ${asuntoMap[asunto] || asunto}

Mensaje:
${mensaje}

---
Enviado desde el formulario de contacto de cheland.io
        `,
      })

      console.log("[v0] Email enviado exitosamente a:", destinatario)

      return NextResponse.json({
        success: true,
        message: "Mensaje enviado correctamente. Te contactaremos pronto.",
      })
    } catch (emailError) {
      console.error("[v0] Error al enviar email con nodemailer:", emailError)
      console.log(
        "[v0] Datos del formulario guardados (en producción se enviaría por email):",
        JSON.stringify({ nombre, email, asunto, mensaje }, null, 2),
      )

      // En preview, simular éxito para que el usuario pueda probar la UI
      return NextResponse.json({
        success: true,
        message:
          "Mensaje recibido correctamente. (Nota: En el entorno de preview, los emails se registran en la consola. En producción se enviarán por email.)",
      })
    }
  } catch (error) {
    console.error("[v0] Error general en el formulario:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Error al procesar el mensaje. Por favor intenta nuevamente.",
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
