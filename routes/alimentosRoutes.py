from controllers.alimentosController import Alimentos

def ingressos(app):
    app.route('/ingressos', method=['POST','GET'])(Alimentos)