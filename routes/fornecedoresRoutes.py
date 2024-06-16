from controllers.fornecedoresController import fornecedoresController

def fornecedores(app):
    app.route('/fornecedores', method=['POST'])(fornecedoresController)