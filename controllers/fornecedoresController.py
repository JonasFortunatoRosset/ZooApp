from flask import request, jsonify
from database.db import db
from models.fornecedores import Fornecedores

def fornecedoresController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            fornecedores = Fornecedores(codigo=data['codigo'], empresa=data['empresa'], endereco=data['endereco'], telefone=data['telefone'], email=data['email'])
            db.session.add(fornecedores)
            db.session.commit()
            return jsonify({'message': 'Fornecedor inserido com sucesso'}), 200
        except Exception as e:
            return jsonify({'error': 'Erro ao cadastrar Fornecedor. Erro: {}'.format(str(e))}), 400

    elif request.method == 'GET':
        try:
            data = Fornecedores.query.all()
            fornecedor = {'fornecedores': [fornecedores.to_dict() for fornecedores in data]}
            return fornecedor

        except Exception as e:
            return 'Não foi possível buscar usuários. Error: {}'.format(str(e)), 405   

    elif request.method == 'PUT':
        try:
            data = request.get_json()
            put_fornecedores_id = data['codigo']
            put_fornecedores = Fornecedores.query.get(put_fornecedores_id)
            if put_fornecedores is None:
                return {'error': 'Fornecedor não encontrado'}, 404
            put_fornecedores.empresa = data.get('empresa', put_fornecedores.empresa)
            put_fornecedores.endereco = data.get('endereco', put_fornecedores.endereco)
            put_fornecedores.telefone = data.get('telefone', put_fornecedores.telefone)
            put_fornecedores.email = data.get('email', put_fornecedores.email)
            print(put_fornecedores.empresa, put_fornecedores.endereco, put_fornecedores.telefone, put_fornecedores.email)
            db.session.commit()
            return 'Fornecedor alterado com sucesso', 200
        except Exception as e:
            return {'error': 'Erro ao atualizar Fornecedor. Erro{}'.format(e)}, 400

    elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_fornecedores_id = data['codigo']
                delete_fornecedor = Fornecedores.query.get(delete_fornecedores_id)
                if delete_fornecedor is None:
                    return {'error': 'Fornecedor não encontrado'}, 404
                db.session.delete(delete_fornecedor)
                db.session.commit()
                return 'Fornecedor deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar Fornecedor. Erro{}'.format(e)}, 400 
