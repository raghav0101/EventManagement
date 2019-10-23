from django.db import models

# Create your models here.
class Event(models.Model):
    event_id = models.CharField(max_length=10, null=False,primary_key=True)
    event_name= models.CharField(max_length=50,null=False)
    event_type=models.CharField(max_length=20,null=False)
    date= models.DateField(null=False)
    time=models.TimeField(null=False)

class Organisation(models.Model):
    org_id=models.CharField(max_length=10, null=False,primary_key=True)
    org_name= models.CharField(max_length=50, null=False)
    org_location= models.CharField(max_length=20, null=False)
    email=models.CharField(null=True)
    phn_no=models.CharField(max_length=10,null=False)

class Org(models.Model):
    org_id = models.ForeignKey(Organisation, null=False,primary_key=True)
    event_id = models.ForeignKey(Event, null=False)

class Users(models.Models):
    user_id=models.CharField(max_length=10, null=False, primary_key=True)
    name=models.CharField(max_length=50,null=False)
    email=models.CharField(max_length=20,null=False)
    phn_no=models.CharField(max_length=10,null=False)
    gender=models.CharField(max_length=10,null=False)
    dob=models.DateField(null=False)

class  User(models.Model):
    user_id=models.ForeignKey(Users,null=False,primary_key=True)
    event_id=models.ForeignKey(Event,null=False)

class Managing_Team(models.Model):
    team_id=models.CharField(max_length=10,null=False,primary_key=True)
    name=models.CharField(max_length=50,null=False)
    email=models.CharField(max_length=50,null=False)
    phn_no=models.CharField(max_length=10,null=False)

class Managing(models.Model):
    team_id=models.ForeignKey(Managing_Team,null=False,primary_key=True)
    event_id=models.ForeignKey(Event,null=False)

class Payment(models.Model):
    payment_id=models.CharField(max_length=10,null=False,primary_key=True)
    mode=models.CharField(max_length=20,null=False)
    date=models.DateField(null=False)
    time=models.TimeField(null=False)

class Pay(models.Model):
    payment_id=models.ForeignKey(Payment,null=False,primary_key=True)
    user_id=models.ForeignKey(Users,null=False)

class Venue(models.Model):
    venue_id=models.CharField(max_length=10,null=False,primary_key=True)
    building_name=models.CharField(max_length=50,null=True)
    room_no=models.CharField(max_length=10,null=True)
    availability=models.CharField(max_length=20,null=False)


