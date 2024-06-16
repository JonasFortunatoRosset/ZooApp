from controllers.fornecedoresController import Fornecedores

def fornecedores(app):
    app.route('/fornecedores', method=['POST', 'GET'])(Fornecedores)