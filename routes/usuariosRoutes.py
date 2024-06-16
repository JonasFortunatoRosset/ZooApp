from controllers.usuariosController import usuariosController

def usuario(app):
    app.route('/usuarios', methods=['POST', 'GET'])(usuariosController)