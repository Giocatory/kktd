from django.shortcuts import render


def index(request):
    return render(request, 'html/index.html')

def about(request):
    return render(request, 'html/about.html')

def local_acts(request):
    return render(request, 'html/local_acts.html')