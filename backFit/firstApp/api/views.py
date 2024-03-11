from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        login = data.get('login')
        senha = data.get('senha')

        # Aqui você pode adicionar lógica de autenticação
        # Exemplo simples: apenas retornar os dados recebidos
        response_data = {'login': login, 'senha': senha}

        return JsonResponse(response_data)
    else:
        return JsonResponse({'error': 'Método não permitido'}, status=405)

