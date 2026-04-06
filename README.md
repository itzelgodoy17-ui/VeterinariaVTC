# 🐾 VTC: Sistema de Gestión de Turnos Veterinarios

**VTC (Tu aliado en el cuidado animal)** es una aplicación web Full-stack diseñada para agilizar la programación de citas en clínicas veterinarias. Este proyecto demuestra una implementación robusta de una **Base de Datos Relacional (PostgreSQL)**, autenticación segura y una interfaz de usuario dinámica.

---

## 🚀 Aspectos Técnicos Destacados

* **Arquitectura Relacional:** Implementación de una relación `1:1` entre **Usuarios** y **Credenciales** para mayor seguridad, y una relación `1:N` entre **Usuarios** y **Turnos**.
* **Lógica de Backend:** Desarrollada con **Node.js** y **Express/TypeScript**, utilizando **TypeORM** para las interacciones con la base de datos y DTOs (Data Transfer Objects) personalizados para una validación estricta de datos.
* **Seguridad:** Hashing de contraseñas (SHA-256) y verificación de credenciales para garantizar la integridad de los datos del usuario.
* **Frontend Dinámico:** Construido con **React** y **Vite**, con un dashboard responsivo donde los usuarios pueden ver, programar y seguir las citas médicas de sus mascotas.

---

## 🛠️ Stack Tecnológico

* **Frontend:** React, Vite, Redux (Estado Global), SweetAlert2.
* **Backend:** Node.js, TypeScript, TypeORM.
* **Base de Datos:** PostgreSQL.
* **Herramientas:** Git Bash, pgAdmin4, Postman.

---

### 📸 Vista Previa
<p align="center">
  <img src="./screenshotregister.png" alt="Registro" width="400">
  <img src="./screenshotlogin.png" alt="Login" width="400">
  <img src="./screenshothome.png" alt="Inicio" width="400">
  <img src="./screenshottaketurn.png" alt="Agendar Turno" width="400">
  <img src="./screenshotshifts.png" alt="Mis Turnos" width="400">
</p>

---

## 👤 Autor
* **Itzel Godoy Lopez** - *Desarrollador Fullstack*
