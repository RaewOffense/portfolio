from django.contrib import admin
from .models import ContactMessage

class ContactMessageDisplay(admin.ModelAdmin):  # Fix the class name
    list_display = ('name', 'email', 'subject', 'message')  # Should be list_display, not display_list

admin.site.register(ContactMessage, ContactMessageDisplay)