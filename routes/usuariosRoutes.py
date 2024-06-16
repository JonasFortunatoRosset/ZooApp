from controllers.usuariosController import Usuarios

def usuario(app):
    app.route('/usuarios', method=['POST', 'GET'])(Usuarios)