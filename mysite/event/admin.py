from django.contrib import admin

# Register your models here.
from .models import Event
from .models import Organisation
from .models import Org
from .models import Users
from .models import User
from .models import Venue
from .models import Payment
from .models import Pay

admin.site.register(Event)
admin.site.register(Organisation)
admin.site.register(Org)
admin.site.register(User)
admin.site.register(Users)
admin.site.register(Venue)
admin.site.register(Pay)
admin.site.register(Payment)

