import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/WEB-FE-REACT-HW4-ElkinSantis/',  // Reemplaza <repository-name> por el nombre de tu repositorio en GitHub
})

