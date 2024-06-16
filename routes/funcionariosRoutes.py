from controllers.funcionariosController import Funcionarios

def funcionarios(app):
    app.route('/funcionarios', method=['POST', 'GET'])(Funcionarios)