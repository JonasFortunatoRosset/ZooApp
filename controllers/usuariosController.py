from flask import request
from database.db import db
from models.usuarios import Usuarios

def usuariosController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            usuario = Usuarios(data['codigo'], data['nome'], data['email'], data['senha'])
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
    elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_usuario_id = data['codigo']
                delete_usuario = Usuarios.query.get(delete_usuario_id)
                if delete_usuario is None:
                    return {'error': 'Usuario não encontrado'}, 404
                db.session.delete(delete_usuario)
                db.session.commit()
                return 'Usuario deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar usuario. Erro{}'.format(e)}, 400 