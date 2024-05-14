from controllers.funcionariosController import funcionariosController

def funcionarios(app):
    app.route('/funcionarios', method=['POST', 'GET'])(funcionariosController)