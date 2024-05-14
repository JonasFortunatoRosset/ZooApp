from controllers.usuariosController import usuariosController

def usuario(app):
    app.route('/usuarios', method=['POST', 'GET'])(usuariosController)