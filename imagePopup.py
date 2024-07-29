import pygame
import random
import time
import os
import ctypes
import multiprocessing

def move_window(window_title, width, height):
    user32 = ctypes.windll.user32
    screen_width = user32.GetSystemMetrics(0)
    screen_height = user32.GetSystemMetrics(1)
    x = random.randint(0, screen_width - width)
    y = random.randint(0, screen_height - height)
    hwnd = ctypes.windll.user32.FindWindowW(None, window_title)
    if hwnd:
        ctypes.windll.user32.MoveWindow(hwnd, x, y, width, height, True)

def create_window(image_path, title):
    pygame.init()
    width, height = 800, 600
    screen = pygame.display.set_mode((width, height))
    pygame.display.set_caption(title)
    image = pygame.image.load(image_path)
    image = pygame.transform.scale(image, (width, height))

    running = True
    swap_time = 1

    move_window(title, width, height)

    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False

        screen.blit(image, (0, 0))
        pygame.display.update()

        time.sleep(swap_time)
        move_window(title, width, height)

    pygame.quit()

if __name__ == '__main__':
    current_dir = os.path.dirname(os.path.abspath(__file__))
    image_dir = os.path.join(current_dir, 'image')
    
    image_paths = [os.path.join(image_dir, f) for f in os.listdir(image_dir) if f.endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif'))]

    processes = []
    for i, image_path in enumerate(image_paths):
        title = f"Imagem {i+1}"
        p = multiprocessing.Process(target=create_window, args=(image_path, title))
        processes.append(p)
        p.start()

    for p in processes:
        p.join()
