from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('getAllEvents/', GetAllEvents.as_view()),
    path('getPastEvents/',GetPastEvents.as_view()),
    path('getMostRecentEvents/',GetMostRecentEvent.as_view()),
    path('getRecentEvents/',GetRecentEvents.as_view()),
    path('gamingEvents/',GamingEvents.as_view()),
    path('technicalEvents/',TechnicalEvents.as_view()),
    path('culturalEvents/',CulturalEvents.as_view()),
    path('otherEvents/',OtherEvents.as_view()),
    path('getCategories/',GetCategories.as_view()),
    path('getEvent/',GetEvent.as_view()),
    path('register/',Register.as_view()),
    path('organisation/',Organisation.as_view()),
    path('venue/',Venue.as_view()),
]