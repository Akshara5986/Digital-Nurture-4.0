
    class MyThread extends Thread {
        private String threadName;
    
        MyThread(String name) {
            threadName = name;
        }
    
        public void run() {
            for (int i = 1; i <= 5; i++) {
                System.out.println(threadName + " is running, count: " + i);
                try {
                    Thread.sleep(500); // Sleep for half a second to simulate work
                } catch (InterruptedException e) {
                    System.out.println(threadName + " interrupted.");
                }
            }
        }
    }
    
    public class ThreadCreationExample {
        public static void main(String[] args) {
            MyThread thread1 = new MyThread("Thread 1");
            MyThread thread2 = new MyThread("Thread 2");
    
            thread1.start();
            thread2.start();
        }
    
}

