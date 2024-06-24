from flask import request, jsonify
from database.db import db
from models.alimentos import Alimentos

def alimentosController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            alimentos = Alimentos(codigo=data['codigo'], nome=data['nome'], pesoLote=data['pesoLote'], dataValidade=data['dataValidade'], codfornecedor=data['codFornecedor'])
            db.session.add(alimentos)
            db.session.commit()
            return jsonify({'message': 'Alimentos inserido com sucesso'}), 200
        except Exception as e:
            return jsonify({'error': 'Erro ao cadastrar Alimentos. Erro: {}'.format(str(e))}), 400
        
    elif request.method == 'GET':
        try:
            data = Alimentos.query.all()
            alimento = {'alimentos': [alimentos.to_dict() for alimentos in data]}
            return alimento

        except Exception as e:
            return 'Não foi possível buscar usuários. Error: {}'.format(str(e)), 405

    elif request.method == 'PUT':
        try:
            data = request.get_json()
            put_alimentos_id = data['codigo']
            put_alimentos = Alimentos.query.get(put_alimentos_id)
            if put_alimentos is None:
                return {'error': 'Alimento não encontrado'}, 404
            put_alimentos.nome = data.get('nome', put_alimentos.nome)
            put_alimentos.pesoLote = data.get('pesoLote', put_alimentos.pesoLote)
            put_alimentos.dataValidade = data.get('dataValidade', put_alimentos.dataValidade)
            put_alimentos.codFornecedor = data.get('codFornecedor', put_alimentos.codFornecedor)
            print(put_alimentos.nome,put_alimentos.pesoLote,put_alimentos.dataValidade,put_alimentos.codFornecedor)
            db.session.commit()
            return 'Alimento alterado com sucesso', 200
        except Exception as e:
            return {'error': 'Erro ao atualizar Alimento. Erro{}'.format(e)}, 400

    elif request.method == 'DELETE':
            try:
                data = request.get_json()
                delete_alimentos_id = data['codigo']
                delete_alimentos = Alimentos.query.get(delete_alimentos_id)
                if delete_alimentos is None:
                    return {'error': 'Alimentos não encontrado'}, 404
                db.session.delete(delete_alimentos)
                db.session.commit()
                return 'Alimentos deletado com sucesso', 200
            except Exception as e:
                return {'error': 'Erro ao atualizar Alimentos. Erro{}'.format(e)}, 400 
