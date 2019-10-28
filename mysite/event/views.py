from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from datetime import date
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .serializers import *
from datetime import timedelta
import json
import uuid

# Create your views here.
from django.http import HttpResponse
from .models import Event,Organisation,Org,User,Users,Pay,Payment,Venue,Where

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
        most_recent_event=Event.objects.filter(event_date__gte=date.today()).order_by('event_date')[:1]
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

class GetEvent(APIView):
    def get(self,request):
        event=Event.objects.filter(pk=request.query_params.get('eventId'))
        serialized_event=EventSerializer(event,many=True)
        return Response(serialized_event.data,status=status.HTTP_200_OK)


class Register(APIView):
    def post(self,request):
        user_id = request.data['userId']
        event_id = request.data['eventId']
        if user_id is None or event_id is None:
             return Response(status=status.HTTP_404_NOT_FOUND)

        event = Event.objects.filter(pk=event_id)
        user = Users.objects.filter(pk=user_id)
        register = User.objects.create(user_id=user[0],event_id=event[0])
        serialized_register = (register)
        return Response(serialized_register.data, status=status.HTTP_200_OK)

class Organis(APIView):
    def get(self,request):
        event_id = request.query_params['eventId']
        if event_id is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        event=Event.objects.get(pk=event_id)
        org_id=Org.objects.filter(event_id=event)[0].org_id
        org=Organisation.objects.get(pk=org_id.org_id)
        serialized_org=OrganisationSerializer(org)
        return Response(serialized_org.data,status=status.HTTP_200_OK)

class Ven(APIView):
    def get(self,request):
        event_id = request.query_params['eventId']
        if event_id is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        event=Event.objects.get(pk=event_id)
        venue_id=Where.objects.filter(event_id=event)[0].venue_id
        venue=Venue.objects.get(pk=venue_id.venue_id)
        serialized_venue=VenueSerializer(venue)
        return Response(serialized_venue.data,status=status.HTTP_200_OK)

class RegisteredEvents(APIView):
    def get(self,request):
        user_id = request.query_params['userId']
        if event_id is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        registered=User.objects.filter(user_id='userId')
        events = []
        for register in registered:
            event = Event.objects.get(pk=register.event_id.event_id)
            events += event

        serialized_event=EventSerializer(events)
        return Response(serialized_event.data,status=status.HTTP_200_OK)

class NewUser(APIView):
    def post(self,request):
        name = request.data['name']
        email = request.data['email']
        phn_no = request.data['phn_no']
        gender = request.data['gender']
        dob = request.data['dob']
        password = request.data['password']
        user_id = uuid.uuid4()
        newUser = Users.objects.create(user_id=user_id,name=name,email=email,phn_no=phn_no,gender=gender,dob=dob,password=password)
        serialized_newuser = UsersSerializer(newUser)
        return Response(serialized_newuser.data,status = status.HTTP_200_OK)

class NewEvent(APIView):
    def post(self,request):
        event_name=request.data['eventName']
        event_type=request.data['eventType']
        event_date=request.data['eventDate']
        time=request.data['time']
        desc=request.data['desc']
        event_id=uuid.uuid4()
        org_name=request.data('orgName')
        email=request.data('email')
        phn_no=request.data('phn_no')
        org = Organisation.objects.filter(org_name=org_name)[0]
        newEvent = Event.objects.create(event_id=event_id,event_name=event_name,event_type=event_type,time=time,desc=desc)
        serialized_newevent=EventSerializer(newEvent)
        return Response(serialized_newevent,status = status.HTTP_200_OK)

class logIn(APIView):
    def post(self,request):
        email=request.data['email']
        if email is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        password = request.data['password']
        user = Users.objects.filter(email=email)
        if len(user)==0:
            return Response(status=status.HTTP_404_NOT_FOUND)
        else:
            user = user[0]
            if user.password==password:
                serialized_users=UsersSerializer(user)
                return Response(serialized_users.data,status=status.HTTP_200_OK)
            else:
                return Response(status=status.HTTP_404_NOT_FOUND)