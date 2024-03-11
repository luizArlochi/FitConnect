from django.urls import path
from firstApp.views import login

urlpatterns = [
    path('api/login/', login, name='login'),
]
