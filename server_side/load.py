import numpy as np
import os
from keras_preprocessing import image
from keras.models import load_model

currentDir = os.getcwd()
model = load_model(os.path.join(currentDir, 'model.h5'))
path = os.path.join(currentDir, 'Content')


#load the react image in the first path here
test_image = image.load_img(path+"/validation/good/1535.jpg", target_size=[64, 64])

test_image = image.img_to_array(test_image)
test_image = np.expand_dims(test_image, axis = 0)
result = model.predict(test_image)

#if result = 0, the form is bad, if result = 1, the form is good
if result == 0:
    print('bad')
if result == 1:
    print('good')
