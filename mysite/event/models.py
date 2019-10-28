from django.db import models
import uuid

# Create your models here.
class Event(models.Model):
    event_id = models.CharField(max_length=128, null=False,primary_key=True)
    event_name= models.CharField(max_length=50,null=False)
    event_type=models.CharField(max_length=20,null=False)
    event_date= models.DateField(null=False)
    time=models.TimeField(null=False)
    desc=models.CharField(max_length=500, null=False,default='No Description')

    def __str__(self):
        return self.event_name

class Organisation(models.Model):
    org_id=models.CharField(max_length=128, null=False,primary_key=True)
    org_name= models.CharField(max_length=50, null=False)
    org_location= models.CharField(max_length=20, null=False)
    email=models.CharField(max_length=20, null=True)
    phn_no=models.CharField(max_length=10,null=False)

class Org(models.Model):
    org_id = models.ForeignKey(Organisation, null=False,on_delete=models.CASCADE)
    event_id = models.ForeignKey(Event, null=False, on_delete=models.CASCADE)

class Users(models.Model):
    user_id=models.CharField(max_length=128, null=False, primary_key=True)
    name=models.CharField(max_length=50,null=False)
    email=models.CharField(max_length=20,null=False)
    phn_no=models.CharField(max_length=10,null=False)
    gender=models.CharField(max_length=10,null=False)
    dob=models.DateField(null=False)
    password=models.CharField(max_length=128, null=False,default = 'password')

class  User(models.Model):
    user_id=models.ForeignKey(Users,null=False, on_delete=models.CASCADE)
    event_id=models.ForeignKey(Event,null=False, on_delete=models.CASCADE)

class Payment(models.Model):
    payment_id=models.CharField(max_length=128,null=False,primary_key=True)
    mode=models.CharField(max_length=20,null=False)
    date=models.DateField(null=False)
    time=models.TimeField(null=False)

class Pay(models.Model):
    payment_id=models.ForeignKey(Payment,null=False, on_delete=models.CASCADE)
    user_id=models.ForeignKey(Users,null=False, on_delete=models.CASCADE)

class Venue(models.Model):
    venue_id=models.CharField(max_length=10,null=False,primary_key=True)
    building_name=models.CharField(max_length=50,null=True, default="IRIS labs")
    room_no=models.CharField(max_length=10,null=True, default="10")

class Where(models.Model):
    venue_id=models.ForeignKey(Venue,null=False, on_delete=models.CASCADE)
    event_id=models.ForeignKey(Event,null=False, on_delete=models.CASCADE)
