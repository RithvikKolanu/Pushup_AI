import cv2

capture = cv2.VideoCapture('c:/projects/workout_app/server_side/Content/bad_form.mp4')
framenr = 0

while(True):
    success, frame = capture.read()
    print("worked")

    if success:
        cv2.imwrite(f'c:/projects/workout_app/server_side/Content/al/{framenr}.jpg', frame)
        print("success")
    else:
        print('failed')
        break

    framenr = framenr+1
    print(framenr)

capture.release() 