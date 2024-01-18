from django.db import models
from django.shortcuts import reverse
from django.utils.text import slugify


# Create your models here.
class ContactInfo(models.Model):
    address = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=55, blank=True, null=True)
    phone = models.CharField(max_length=16, blank=True, null=True)
    facebook_link = models.CharField(blank=True, null=True)
    twitter_link = models.CharField(blank=True, null=True)
    linkedin_link = models.CharField(blank=True, null=True)
    instagram_link = models.CharField(blank=True, null=True)
    youtube_link = models.CharField(blank=True, null=True)

    class Meta:
        verbose_name_plural = 'Contact Info'

    def __str__(self):
        return self.email


class Banner(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='banner/')
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Banners'
        ordering = ('-created',)

    def __str__(self):
        return self.title


class About(models.Model):
    imgae = models.ImageField(upload_to='about/', blank=True, null=True)
    experiance = models.CharField(max_length=10, blank=True, null=True)
    title = models.CharField(max_length=150, blank=True, null=True)
    description = models.TextField()

    class Meta:
        verbose_name_plural = 'About'

    def __str__(self):
        return self.title


class ServiceItem(models.Model):
    icon = models.ImageField(upload_to="service/", blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to="service/", blank=True, null=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Service item'
        ordering = ('-created',)

    def __str__(self):
        return self.title


class Service(models.Model):
    background_img = models.ImageField(
        upload_to='service/', blank=True, null=True)
    item = models.ManyToManyField(ServiceItem, blank=True)

    class Meta:
        verbose_name_plural = 'Service'

    def __str__(self):
        return str(self.background_img)


class Whychoose(models.Model):
    imgae = models.ImageField(upload_to='whychoose/', blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField()
    cleaners = models.PositiveBigIntegerField()
    clients = models.PositiveBigIntegerField()
    projects = models.PositiveBigIntegerField()

    class Meta:
        verbose_name_plural = 'Whychoose'

    def __str__(self):
        return self.title


STATUS = (
    ("Running", "Running"),
    ("Complete", "Complete"),
    ("Upcomming", "Upcomming"),
)


class ProjectItem(models.Model):
    imgae = models.ImageField(upload_to='projects/', blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    live = models.CharField(max_length=100, blank=True, null=True)
    status = models.CharField(max_length=50, choices=STATUS)
    slug = models.SlugField(null=False, allow_unicode=True,
                            db_index=True, blank=True, unique=True)
    created = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Project item'
        ordering = ('-created',)
    
    def save(self, *args, **kwargs):
        # Use a custom slugify function if desired
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('core:projectitem', args=[self.slug])


class Projects(models.Model):
    background_img = models.ImageField(
        upload_to="projects/", blank=True, null=True)
    item = models.ManyToManyField(ProjectItem, blank=True)

    class Meta:
        verbose_name_plural = 'Projects'


class Teammember(models.Model):
    imgae = models.ImageField(upload_to='team/', blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    designation = models.CharField(max_length=255, blank=True, null=True)
    twitter = models.CharField(max_length=255, blank=True, null=True)
    facebook = models.CharField(max_length=255, blank=True, null=True)
    linkedin = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(null=False, allow_unicode=True, db_index=True, blank=True)

    class Meta:
        verbose_name_plural = 'Team member'
    
    def save(self, *args, **kwargs):
        # Use a custom slugify function if desired
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('core:teammember', args=[self.slug])


class TestItem(models.Model):
    imgae = models.ImageField(upload_to='testimonial/', blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    profession = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField()
    slug = models.SlugField(null=False, allow_unicode=True, db_index=True, blank=True, unique=True)

    class Meta:
        verbose_name_plural = 'Testimonial Item'
    
    def save(self, *args, **kwargs):
        # Use a custom slugify function if desired
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('core:testimonialitem', args=[self.slug])


class Testimonial(models.Model):
    background_img = models.ImageField(
        upload_to='testimonial/', blank=True, null=True)
    imgae = models.ImageField(upload_to='testimonial/', blank=True, null=True)
    item = models.ManyToManyField(TestItem, blank=True)

    class Meta:
        verbose_name_plural = 'Testimonial'

    def __str__(self):
        return str(self.background_img)


class Newslatter(models.Model):
    email = models.EmailField(max_length=255, blank=True, null=True)
    message = models.TextField()

    class Meta:
        verbose_name_plural = 'Newslatter'

    def __str__(self):
        return self.email


class Contact(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    subject = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()

    class Meta:
        verbose_name_plural = 'Contact'

    def __str__(self):
        return self.name
