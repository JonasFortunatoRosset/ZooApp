from controllers.alimentosController import alimentosController

def alimentos(app):
    app.route('/alimentos', method=['POST'])(alimentosController)