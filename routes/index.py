from routes.alimentosRoutes import alimentos
from routes.animaisRoutes import animais
from routes.fornecedoresRoutes import fornecedores
from routes.funcionariosRoutes import funcionarios
from routes.ingressosRoutes import ingressos
from routes.usuariosRoutes import usuario


def default_routes(app):
    alimentos(app)
    animais(app)
    fornecedores(app)
    funcionarios(app)
    ingressos(app)
    usuario(app)