from controllers.alimentosController import alimentosController

def alimentos(app):
    app.route('/alimentos', methods=['POST'])(alimentosController)