from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import date
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
from django.http import HttpResponse
from .models import Event,Organisation,Org,User,Users,Pay,Payment,Venue

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class GetAllEvents(APIView):

    def get(self, request):
        all_events= Event.objects.filter(event_date__gte=date.today())

class GetPastEvents(APIView):

    def get(self, request):
        past_events=Event.objects.filter(event_date__lt=date.today())

class GetMostRecentEvent(APIView):

    def get(self,request):
        most_recent_event=Event.objects.filter(event_date__gte=date.today()).order_by('event_date')

class GetRecentEvents(APIView):

    def get(self,request):
        recent_event=Event.objects.filter(event_date__gte=date.today() ,event_date__lte=date.today()+7)

class GamingEvents(APIView):

    def get(self,request):
        gaming_events=Event.objects.filter(event_type='Gaming')

class TechnicalEvents(APIView):

    def get(self,request):
        technical_events=Event.objects.filter(event_type='Technical')

class CulturalEvents(APIView):

    def get(self,request):
        cultural_events=Event.objects.filter(event_type='Cultural')

class OtherEvents(APIView):

    def get(self,request):
        other_events=Event.objects.filter(event_type='Other')

