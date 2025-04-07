from django.shortcuts import render, redirect
from .models import ContactMessage

def home(request):
    if request.method == 'POST':
        print(request.POST)
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message = request.POST.get('message')

        # Save to model
        contactMessages = ContactMessage(
            name=name,
            email=email,
            subject=subject,
            message=message
        )
        contactMessages.save()


    return render(request, 'home.html')
