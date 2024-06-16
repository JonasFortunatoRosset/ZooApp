from flask import request
from database.db import db
from models.usuarios import Usuarios

def usuariosController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            usuario = Usuarios(data['nome'])
            db.session.add(usuario)
            db.session.commit()
            return 'Usuario inserido com sucesso', 200
        except Exception as e:
            return {'error: Erro ao cadastrar usuário. Erro: {}'.format(str(e))}, 400
    elif request.method == 'GET':
        try: 
            data = Usuarios.query.all()
        except Exception as e:
            return 'Não foi possível buscar os usuários', 405