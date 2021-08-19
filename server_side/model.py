import tensorflow as tf
import matplotlib.pyplot as plt
import numpy as np 
import cv2
import os
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.preprocessing import image
from tensorflow.keras.optimizers import RMSprop

#this is the path for the pictures
#make this a relative path
path = "c:/projects/workout_app/server_side/content"

print(cv2.imread(path + "/training/good/3.jpg").shape)

#converts the images to black and white
train = ImageDataGenerator(rescale = 1/255)
test = ImageDataGenerator(rescale = 1/255)
validation = ImageDataGenerator(rescale = 1/255)

train_dataset = train.flow_from_directory(path+"/training", target_size = (480, 270), batch_size = 36, class_mode = 'binary', )
test_dataset = test.flow_from_directory(path+"/testing", target_size = (480, 270), batch_size = 36, class_mode = 'binary', )
validation_dataset = validation.flow_from_directory(path+"/validation", target_size = (480, 270), batch_size = 36, class_mode = 'binary', )

print(train_dataset[0])