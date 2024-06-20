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
            user = {'usuarios': [usuarios.to_dict() for usuarios in data]}
            return user
        except Exception as e:
            return 'Não foi possível buscar usuários. Error: {}'.format(str(e)), 405

    elif request.method == 'PUT':
            try:
                data = request.get_json()
                put_usuario_id = data['codigo']
                put_usuario = Usuarios.query.get(put_usuario_id)
                if put_usuario is None:
                    return {'error': 'Cliente não encontrado'}, 404
                put_usuario.nome = data.get('nome', put_usuario.nome)
                put_usuario.email = data.get('email', put_usuario.email)
                put_usuario.senha = data.get('senha', put_usuario.senha)
                print(put_usuario.nome, put_usuario.email, put_usuario.senha)
                db.session.commit()
                return 'Usuario alterado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar Usuario. Erro{}'.format(e)}, 400
        
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