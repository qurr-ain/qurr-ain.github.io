#-------------------------------------------------------------------------------
# Name:        module1
# Purpose:
#
# Author:      QURRATUAINI
#
# Created:     25/04/2022
# Copyright:   (c) QURRATUAINI 2022
# Licence:     <your licence>
#-------------------------------------------------------------------------------

# Importing the PIL library
from PIL import Image,ImageFont
from PIL import ImageDraw

# Open an Image
i=500
grey=(211, 211, 211)
black=(0,0,0)
white=(255,255,255)
while(i<501):
    path= 'Batch13/EP'+str(i)+'.png'
    print(path)
    img = Image.open(path)

    # Call draw Method to add 2D graphics in an image
    I1 = ImageDraw.Draw(img)

    # Add Text to an image
    font = ImageFont.truetype("calibri.ttf", size=13)
    I1.text((210,260), "ELEPHUNKS.COM", fill=grey,font=font)

    # Display edited image
    img.show()

    # Save the edited image
    img.save(path)
    i+=1

