"use server"

import nodemailer from "nodemailer"

type FormData = {
  nombre: string
  email: string
  asunto: string
  mensaje: string
}

export async function sendEmail(formData: FormData) {
  console.log("🔍 Iniciando proceso de envío de correo...")
  console.log(
    `📧 Datos del formulario: Nombre: ${formData.nombre}, Email: ${formData.email}, Asunto: ${formData.asunto}`,
  )

  try {
    // Obtener configuración SMTP desde variables de entorno
    const host = process.env.EMAIL_HOST || "smtp.hostinger.com"
    const port = Number(process.env.EMAIL_PORT) || 465
    const secure = process.env.EMAIL_SECURE === "true" || true
    const user = process.env.EMAIL_USER || "info@cheland.io"
    const pass = process.env.EMAIL_PASSWORD
    const from = process.env.EMAIL_FROM || "Formulario Web Cheland <info@cheland.io>"

    // Registrar configuración (sin mostrar la contraseña completa)
    console.log(`⚙️ Configuración SMTP: Host: ${host}, Puerto: ${port}, Secure: ${secure}, Usuario: ${user}`)
    console.log(`⚙️ Remitente: ${from}`)

    if (!pass) {
      console.error("❌ ERROR: No se encontró la contraseña de correo en las variables de entorno")
      return {
        success: false,
        message: "Error de configuración: falta la contraseña de correo electrónico",
      }
    }

    // Mostrar los primeros caracteres de la contraseña para verificar que existe (solo para depuración)
    console.log(
      `⚙️ Contraseña configurada: ${pass.substring(0, 1)}${"*".repeat(pass.length - 1)} (${pass.length} caracteres)`,
    )

    // Configurar el transporter de nodemailer con opciones adicionales
    console.log("🔄 Creando transporter de nodemailer...")
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: user.includes("@") ? user : `${user}@cheland.io`, // Asegurarse de que el usuario tenga el dominio
        pass,
      },
      tls: {
        // Ignorar errores de certificado (solo para pruebas)
        rejectUnauthorized: false,
      },
      debug: false, // Deshabilitar logs de depuración de nodemailer
      logger: false, // Deshabilitar logger adicional
    })

    // Verificar conexión con el servidor SMTP
    console.log("🔄 Verificando conexión con el servidor SMTP...")
    try {
      const verificationResult = await transporter.verify()
      console.log(`✅ Verificación de conexión SMTP exitosa: ${verificationResult}`)
    } catch (verifyError) {
      console.error("❌ Error al verificar la conexión SMTP:", verifyError)

      // Extraer información detallada del error
      let errorDetails = "Error desconocido"
      if (verifyError instanceof Error) {
        errorDetails = `${verifyError.name}: ${verifyError.message}`
        console.error("Detalles adicionales:", JSON.stringify(verifyError))
      }

      return {
        success: false,
        message: `Error de conexión SMTP: ${errorDetails}`,
        details: verifyError instanceof Error ? verifyError.message : "Error desconocido",
      }
    }

    // Crear el contenido del correo
    const mailOptions = {
      from,
      to: "info@cheland.io",
      replyTo: formData.email,
      subject: `Nuevo mensaje de contacto: ${formData.asunto}`,
      text: `
        Nombre: ${formData.nombre}
        Email: ${formData.email}
        Asunto: ${formData.asunto}
        
        Mensaje:
        ${formData.mensaje}
      `,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${formData.nombre}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Asunto:</strong> ${formData.asunto}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${formData.mensaje.replace(/\n/g, "<br>")}</p>
      `,
    }

    console.log("🔄 Enviando correo electrónico...")

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions)

    console.log(`✅ Correo enviado exitosamente!`)
    console.log(`📊 Información de envío: ${JSON.stringify(info)}`)

    return { success: true, message: "Mensaje enviado correctamente" }
  } catch (error) {
    console.error("❌ Error al enviar el correo:", error)

    // Extraer información detallada del error
    const errorMessage = "Error al enviar el mensaje. Por favor, inténtalo de nuevo."
    let errorDetails = "Error desconocido"

    if (error instanceof Error) {
      errorDetails = `${error.name}: ${error.message}`
      if (error.stack) {
        console.error("Stack trace:", error.stack)
      }
    }

    console.error(`❌ Detalles del error: ${errorDetails}`)

    return {
      success: false,
      message: errorMessage,
      details: errorDetails,
    }
  }
}
