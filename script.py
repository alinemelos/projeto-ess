import subprocess
import os

# Caminhos dos diretórios
backend_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'backend')
frontend_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'frontend')

# Comandos para abrir terminais e executar 'npm start'
backend_command = f'start cmd /k "cd /d {backend_dir} && npm start"'
frontend_command = f'start cmd /k "cd /d {frontend_dir} && npm start"'

# Executando os comandos
subprocess.Popen(backend_command, shell=True)
subprocess.Popen(frontend_command, shell=True)
