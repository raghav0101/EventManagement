from .models import Event,Organisation,Org,Venue,User,Users,Payment,Pay,Where
from rest_framework import serializers

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model=Event
        fields='__all__'

class OrganisationSerializer(serializers.ModelSerializer):
    class Meta:
        model=Organisation
        fields='__all__'

class OrgSerializer(serializers.ModelSerializer):
    class Meta:
        model=Org
        fields='__all__'

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model=Venue
        fields='__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'
class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model=Users
        fields='__all__'

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Payment
        fields='__all__'

class PaySerializer(serializers.ModelSerializer):
    class Meta:
        model=Pay
        fields='__all__'
        