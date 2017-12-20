#include <iostream>
using namespace std;

template <class T>
struct Node
{
  T data;
  Node<T> *next;
  Node(const T &d)
  {
    data = d;
    next = NULL;
  }
};

template <class T>
class List
{
public:
  List() { init(); }
  ~List() { clear(); }
  int length;
  void push(const T &d);
  void insert(const int &p, const T &d);
  void reverse();
  void print();
  void clear();

private:
  Node<T> *head;
  void init()
  {
    head = new Node<T>(NULL);
    length = 0;
  }
  Node<T> *getTail()
  {
    Node<T> *h = head;
    while (h->next != NULL)
    {
      h = h->next;
    }
    return h;
  }
};

template <class T>
void List<T>::push(const T &d)
{
  Node<T> *tail = getTail();
  tail->next = new Node<T>(d);
  length++;
}

template <class T>
void List<T>::clear()
{
  Node<T> *p = head;
  Node<T> *q;
  while (p->next)
  {
    q = p;
    p = p->next;
    delete q;
  }
}

template <class T>
void List<T>::print()
{
  Node<T> *p = head;
  while (p->next)
  {
    cout << p->next->data;
    if (p->next->next)
    {
      cout << ',';
    }
    p = p->next;
  }
  cout << endl;
}

template <class T>
void List<T>::insert(const int &p, const T &d)
{
  if (p + 1 > length && p < 0)
  {
    cout << "invalid index" << endl;
    return;
  }
  int index = 0;
  for (Node<T> *q = head; q->next; q = q->next)
  {
    if (p == index)
    {
      Node<T> *t = q->next;
      q->next = new Node<T>(d);
      q->next->next = t;
      break;
    }
    else
    {
      index++;
    }
  }
}

template <class T>
void List<T>::reverse()
{
  if (length == 0 || length == 1)
  {
    return;
  }

  Node<T> *p;
  Node<T> *q;
  p = head->next;
  while (p->next != NULL)
  {
    q = p->next;
    p->next = q->next;
    q->next = head->next;
    head->next = q;
  }
}