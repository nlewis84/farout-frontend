App (red): main container for all components
AppTitle (yellow): displays title of app
PictureFilter (dark green): dropdown to select "hot" or "random" images
PictureCard (orange): contains the entirety of the displayed  image
Image (teal): displays the APOD image
VoteInterface (light green): container for VoteButton and VoteCounter
Vote Button (purple): click this to increment VoteCounter
Vote Counter (blue): displays the current number of like
ImageInformation (fuschia): contains image title, image date and img description
ImageTitle (peach): displays image title
ImageDate (light blue): displays image date
ImageDescription (olive): displays image description

App
    AppTitle 
    PictureFilter 
    PictureCard 
        Image 
        VoteInterface 
            VoteButton 
            VoteCounter
        ImageInformation 

routes are in #7


set css variables to below and codify text size
3.052rem/64.09px
2.441rem/51.27px
1.953rem/41.02px
1.563rem/32.81px
1.25rem/26.25px
1rem/21.00px	

Try to get picture size to be smaller and also center the picture-card-containers when you do.