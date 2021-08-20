import numpy as np
import os
from keras_preprocessing import image
from keras.models import load_model

#make these paths relative instead of fixed
model = load_model('c:/projects/workout_app/server_side/model.h5')
path = "c:/projects/workout_app/server_side/content"

test_image = image.load_img(path+"/validation/good/1635.jpg", target_size=[64, 64])
test_image = image.img_to_array(test_image)
test_image = np.expand_dims(test_image, axis = 0)
result = model.predict(test_image)

if result == 0:
    print('bad')
if result == 1:
    print('good')
