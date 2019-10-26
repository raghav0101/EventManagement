from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import date
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .serializers import EventSerializer
from datetime import timedelta
import json

# Create your views here.
from django.http import HttpResponse
from .models import Event,Organisation,Org,User,Users,Pay,Payment,Venue

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

class GetAllEvents(APIView):

    def get(self, request):
        all_events= Event.objects.filter(event_date__gte=date.today())
        serialized_all_events = EventSerializer(all_events, many=True)
        return Response(serialized_all_events.data, status=status.HTTP_200_OK)

class GetPastEvents(APIView):

    def get(self, request):
        past_events=Event.objects.filter(event_date__lt=date.today())
        serialized_past_events=EventSerializer(past_events, many=True)
        return Response(serialized_past_events.data, status=status.HTTP_200_OK)

class GetMostRecentEvent(APIView):

    def get(self,request):
        most_recent_event=Event.objects.filter(event_date__gte=date.today()).order_by('event_date')
        serialized_most_recent_event=EventSerializer(most_recent_event,many=True)
        return Response(serialized_most_recent_event.data, status=status.HTTP_200_OK)

class GetRecentEvents(APIView):

    def get(self,request):
        recent_event=Event.objects.filter(event_date__gte=date.today() ,event_date__lte=date.today()+timedelta(30))
        serialized_recent_event=EventSerializer(recent_event,many=True)
        return Response(serialized_recent_event.data,status=status.HTTP_200_OK)


class GamingEvents(APIView):

    def get(self,request):
        gaming_events=Event.objects.filter(event_type='Gaming')
        serialized_gaming_events=EventSerializer(gaming_events,many=True)
        return Response(serialized_gaming_events.data,status=status.HTTP_200_OK)

class TechnicalEvents(APIView):

    def get(self,request):
        technical_events=Event.objects.filter(event_type='Technical')
        serialized_technical_events=EventSerializer(technical_events,many=True)
        return Response(serialized_technical_events.data,status=status.HTTP_200_OK)

class CulturalEvents(APIView):

    def get(self,request):
        cultural_events=Event.objects.filter(event_type='Cultural')
        serialized_cultural_events=EventSerializer(cultural_events,many=True)
        return Response(serialized_cultural_events.data,status=status.HTTP_200_OK)
class OtherEvents(APIView):

    def get(self,request):
        other_events=Event.objects.filter(event_type='Other')
        serialized_other_events=EventSerializer(other_events,many=True)
        return Response(serialized_other_events.data,status=status.HTTP_200_OK)

class GetCategories(APIView):
    def get(self,request):
        categories=['All','Technical','Gaming','Cultural','Other']
        serialized_json=json.dumps(categories)
        return Response(serialized_json,status=status.HTTP_200_OK)

