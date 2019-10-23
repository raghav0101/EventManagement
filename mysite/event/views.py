from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import date
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import HttpResponse
from .models import Event,Organisation,Org,User,Users,Managing,Managing_Team,Pay,Payment,Venue

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class GetAllEvents(APIView):

    def get(self, request):
        all_events= Event.objects.filter(date>=date.today())

class GetPastEvents(APIView):

    def get(self, request):
        past_events=Event.objects.filter(date<date.today())

class GetMostRecentEvent(APIView):

    def get(self,request):
        most_recent_event=Event.objects.filter(date>=date.today()).order_by('date')