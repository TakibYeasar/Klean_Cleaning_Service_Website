from django.db import models
from authapi.models import CustomUser
from django.shortcuts import reverse


# Create your models here.


class Banner(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to='banner/')
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Banners'
        ordering = ('-created',)

    def __str__(self):
        return self.image
    
    def get_absolute_url(self):
        return reverse("core:banner", kwargs={
            'slug': self.slug
        })
    
   
class ContactInfo(models.Model):
    address = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=55, blank=True, null=True)
    phone = models.CharField(max_length=16, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Contact Info'
    
    def __str__(self):
        return self.email
    
    def get_absolute_url(self):
        return reverse("core:contactinfo", kwargs={
            'slug': self.slug
        })
        
        
        
class About(models.Model):
    imgae = models.ImageField(upload_to='about/', blank=True, null=True)
    experiance = models.CharField(max_length=10, blank=True, null=True)
    description = models.TextField()
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'About'

    def __str__(self):
        return self.image
    
    def get_absolute_url(self):
        return reverse("core:about", kwargs={
            'slug': self.slug
        })
        
        
        
class ServiceItem(models.Model):
    icon = models.ImageField(upload_to="service/", blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to="service/", blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Service item'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:serviceitem", kwargs={
            'slug': self.slug
        })
    
    
        
class Service(models.Model):
    background_img = models.ImageField(upload_to='service/', blank=True, null=True)
    description = models.TextField()
    item = models.ManyToManyField(ServiceItem)
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Service'

    def __str__(self):
        return self.image
    
    def get_absolute_url(self):
        return reverse("core:service", kwargs={
            'slug': self.slug
        })


 
class Whychoose(models.Model):
    imgae = models.ImageField(upload_to='whychoose/', blank=True, null=True)
    description = models.TextField()
    cleaners = models.PositiveBigIntegerField()
    clients = models.PositiveBigIntegerField()
    projects = models.PositiveBigIntegerField()
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Whychoose'

    def __str__(self):
        return self.image
    
    def get_absolute_url(self):
        return reverse("core:whychoose", kwargs={
            'slug': self.slug
        })
        

class Projectcategory(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Projects Category'
        ordering = ('-created',)
    
    def __str__(self):
        return self.title
        


class ProjectItem(models.Model):
    category = models.ManyToManyField(Projectcategory)
    imgae = models.ImageField(upload_to='projects/', blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    live = models.CharField(max_length=100, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Project item'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:projectitem", kwargs={
            'slug': self.slug
        })



class Projects(models.Model):
    background_img = models.ImageField(upload_to="projects/", blank=True, null=True)
    item = models.ManyToManyField(ProjectItem)
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Projects'

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:projects", kwargs={
            'slug': self.slug
        })


class Team(models.Model):
    imgae = models.ImageField(upload_to='team/', blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    designation = models.CharField(max_length=255, blank=True, null=True)
    twitter = models.CharField(max_length=255, blank=True, null=True)
    facebook = models.CharField(max_length=255, blank=True, null=True)
    linkedin = models.CharField(max_length=255, blank=True, null=True)
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Team member'

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("core:teammember", kwargs={
            'slug': self.slug
        })



class TestItem(models.Model):
    imgae = models.ImageField(upload_to='testimonial/', blank=True, null=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    profession = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField()
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Testimonial Item'

    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse("core:testitem", kwargs={
            'slug': self.slug
        })
    


class Testimonial(models.Model):
    background_img = models.ImageField(upload_to='testimonial/', blank=True, null=True)
    imgae = models.ImageField(upload_to='testimonial/', blank=True, null=True)
    item = models.ManyToManyField(TestItem)
    slug = models.SlugField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Testimonial'

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:testimonial", kwargs={
            'slug': self.slug
        })
        

class Blogscategory(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Blogs Category'
        ordering = ('-created',)
    
    def __str__(self):
        return self.title


class Blogstag(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Blogs Tags'
        ordering = ('-created',)
    
    def __str__(self):
        return self.title


class Blogsparagraph(models.Model):
    image = models.ImageField(upload_to='blogs/', blank=True, null=True)
    title = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField()


class Blogsitem(models.Model):
    category = models.ManyToManyField(Blogscategory)
    image = models.ImageField(upload_to='blogs/', blank=True, null=True)
    title = models.CharField(max_length=150, blank=True, null=True)
    description = models.TextField()
    paragraph = models.ManyToManyField(Blogsparagraph)
    tags = models.ManyToManyField(Blogstag, blank=True, null=True)
    plain_text = models.CharField(max_length=255)
    likes = models.ManyToManyField(CustomUser, null=True, blank=True)
    dislikes = models.ManyToManyField(CustomUser, null=True, blank=True)
    slug = models.SlugField(blank=True, null=True)
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Blogs item'
        ordering = ('-created',)

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("core:blogsitem", kwargs={
            'slug': self.slug
        })

        
        
class BlogReview(models.Model):
    blog = models.ForeignKey(Blogsitem, on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    website = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Blog Reviews'
        ordering = ('-created',)

    def __str__(self):
        return f"To: {self.blog} From: {self.customer}"
    
    
    
class ReplayBlogReview(models.Model):
    review = models.ForeignKey(BlogReview, on_delete=models.CASCADE)
    customer = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    website = models.CharField(max_length=255, blank=True, null=True)
    message = models.TextField()
    created = models.DateField(auto_now_add=True)
    
    class Meta:
        verbose_name_plural = 'Replay Blog Reviews'
        ordering = ('-created',)

    def __str__(self):
        return f"To: {self.review} From: {self.customer}"



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
    





 