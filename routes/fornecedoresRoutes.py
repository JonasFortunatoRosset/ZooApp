from controllers.fornecedoresController import fornecedoresController

def fornecedores(app):
    app.route('/fornecedores', methods=['POST'])(fornecedoresController)