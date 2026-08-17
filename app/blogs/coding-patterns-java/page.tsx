import Link from "next/link";

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-dark py-24 px-6 md:px-12 text-gray-300 font-inter">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-400 hover:text-gold transition-colors font-inter text-sm font-medium mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="m15 18-6-6 6-6"/></svg>
          Back to Blogs
        </Link>
        
        <article>
          <h1 className="text-4xl md:text-5xl text-white mb-6 font-syne font-bold leading-tight">The Ultimate Guide to Coding Patterns: Cracking Competitive Programming in Java</h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-12 pb-12 border-b border-white/10">
            <span>Aug 09, 2026</span>
            <span>•</span>
            <span className="px-3 py-1 bg-gold/10 text-gold rounded-full border border-gold/20">Algorithms</span>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              If you've spent any time on LeetCode, Codeforces, or HackerRank, you've probably hit a wall. You read a problem, stare at a blank screen, and have no idea where to start.
            </p>

            <p>
              The secret to cracking competitive programming and technical interviews isn't memorizing thousands of solutions. It's recognizing patterns.
            </p>

            <p>
              Underneath the endless variations of coding problems lie a core set of fundamental patterns. Once you understand these patterns, you can categorize a problem within seconds and apply a proven template to solve it. In this blog post, I'll walk you through the most important coding patterns, how to spot them, and provide complete Java templates for each.
            </p>

            {/* Pattern 1 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">1. Two Pointers</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              The Two Pointers pattern involves using two pointers (usually integer indices) to iterate through an array or string in tandem. They can move towards each other, away from each other, or in the same direction. This technique is incredibly powerful for optimizing <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-gold">O(N^2)</code> solutions down to <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-gold">O(N)</code>.
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>The input is an array, string, or linked list.</li>
              <li>The data is often sorted.</li>
              <li>You need to find a pair of elements that satisfy a condition (e.g., target sum).</li>
              <li>You need to reverse or compare elements from both ends.</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Two Sum II (Sorted Array)</p>
            <p><strong className="text-white">Problem:</strong> Given a 1-indexed array of integers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`public class TwoPointers {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;

        while (left < right) {
            int currentSum = numbers[left] + numbers[right];
            
            if (currentSum == target) {
                // Found the pair
                return new int[] {left + 1, right + 1};
            } else if (currentSum < target) {
                // Sum is too small, move the left pointer to increase the sum
                left++;
            } else {
                // Sum is too large, move the right pointer to decrease the sum
                right--;
            }
        }
        return new int[]{-1, -1};
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(N)</code> because we process each element at most once.</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(1)</code> because we only use two variables.</p>
            </div>

            {/* Pattern 2 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">2. Sliding Window</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              The Sliding Window pattern is used to process sequential data (arrays or strings) to find a subarray or substring that satisfies a certain condition. Instead of recalculating overlapping sub-problems, we maintain a "window" that slides over the data. We expand the window from the right and shrink it from the left.
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>The problem asks for a maximum, minimum, longest, or shortest subarray/substring.</li>
              <li>You need to calculate something among all contiguous subarrays of a given size.</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Maximum Sum Subarray of Size K</p>
            <p><strong className="text-white">Problem:</strong> Given an array of positive numbers and a positive number K, find the maximum sum of any contiguous subarray of size K.</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`public class SlidingWindow {
    public int findMaxSumSubArray(int k, int[] arr) {
        int maxSum = 0;
        int windowSum = 0;
        int windowStart = 0;

        for (int windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            windowSum += arr[windowEnd]; // Add the next element

            // If we've hit the window size, slide it
            if (windowEnd >= k - 1) {
                maxSum = Math.max(maxSum, windowSum); // Update max
                windowSum -= arr[windowStart];        // Subtract the element going out
                windowStart++;                        // Slide the window ahead
            }
        }
        return maxSum;
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(N)</code> as we slide the window through the array.</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(1)</code>.</p>
            </div>

            {/* Pattern 3 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">3. Fast & Slow Pointers (Floyd’s Cycle Detection)</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              Also known as the "Hare and Tortoise" algorithm, this pattern uses two pointers moving at different speeds (usually one moves by 1 step, the other by 2). If there is a cycle in the data structure, the fast pointer will eventually catch up to the slow pointer.
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Dealing with Linked Lists or arrays where elements represent indices.</li>
              <li>You need to detect a cycle or find the middle of a linked list.</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Linked List Cycle</p>
            <p><strong className="text-white">Problem:</strong> Given the head of a linked list, determine if the linked list has a cycle in it.</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`class ListNode {
    int val;
    ListNode next;
    ListNode(int x) { val = x; next = null; }
}

public class FastSlowPointers {
    public boolean hasCycle(ListNode head) {
        if (head == null || head.next == null) return false;
        
        ListNode slow = head;
        ListNode fast = head;
        
        while (fast != null && fast.next != null) {
            slow = slow.next;          // Moves 1 step
            fast = fast.next.next;     // Moves 2 steps
            
            if (slow == fast) {
                return true; // Cycle detected
            }
        }
        return false;
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(N)</code>.</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(1)</code>.</p>
            </div>

            {/* Pattern 4 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">4. Merge Intervals</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              This pattern is an efficient technique to deal with overlapping intervals. In many problems involving intervals, you either need to find overlapping intervals or merge intervals if they overlap. The key is to sort the intervals based on their start times first.
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>The problem provides an array of intervals, schedules, or time periods.</li>
              <li>Words like "overlapping," "merge," or "mutually exclusive" are used.</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Merge Intervals</p>
            <p><strong className="text-white">Problem:</strong> Given an array of intervals where <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-gold">intervals[i] = [start_i, end_i]</code>, merge all overlapping intervals.</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

public class Intervals {
    public int[][] merge(int[][] intervals) {
        if (intervals.length <= 1) return intervals;

        // 1. Sort intervals based on starting time
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));

        List<int[]> merged = new ArrayList<>();
        int[] currentInterval = intervals[0];
        merged.add(currentInterval);

        for (int[] interval : intervals) {
            int currentEnd = currentInterval[1];
            int nextStart = interval[0];
            int nextEnd = interval[1];

            if (currentEnd >= nextStart) { // Overlap exists
                // Merge by updating the end of the current interval
                currentInterval[1] = Math.max(currentEnd, nextEnd);
            } else { // No overlap
                currentInterval = interval;
                merged.add(currentInterval);
            }
        }

        return merged.toArray(new int[merged.size()][]);
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(N log N)</code> due to sorting. The merging step is <code className="text-gold">O(N)</code>.</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(N)</code> to store the output.</p>
            </div>

            {/* Pattern 5 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">5. Breadth-First Search (BFS) on Trees/Graphs</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              BFS is used to traverse or search a tree or graph level by level. It explores all neighbors at the present depth prior to moving on to the nodes at the next depth level. This pattern almost always uses a Queue.
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>You need to traverse a tree level-by-level.</li>
              <li>You need to find the shortest path in an unweighted graph.</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Binary Tree Level Order Traversal</p>
            <p><strong className="text-white">Problem:</strong> Given the root of a binary tree, return the level order traversal of its nodes' values.</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`import java.util.*;

class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

public class TreeBFS {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if (root == null) return result;

        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);

        while (!queue.isEmpty()) {
            int levelSize = queue.size();
            List<Integer> currentLevel = new ArrayList<>();

            for (int i = 0; i < levelSize; i++) {
                TreeNode currentNode = queue.poll();
                currentLevel.add(currentNode.val);

                if (currentNode.left != null) queue.offer(currentNode.left);
                if (currentNode.right != null) queue.offer(currentNode.right);
            }
            result.add(currentLevel);
        }
        
        return result;
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(N)</code> where N is the total number of nodes.</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(N)</code> for the queue (in the worst case, the last level holds N/2 nodes).</p>
            </div>

            {/* Pattern 6 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">6. Depth-First Search (DFS)</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              DFS dives as deep as possible down one branch before backtracking. It's perfectly suited for recursive implementations. For trees, this usually takes the form of Pre-order, In-order, or Post-order traversals.
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Exploring all possible paths in a graph or tree.</li>
              <li>Searching for a specific path, or checking if a path exists.</li>
              <li>Problems involving permutations, combinations, or backtracking.</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Maximum Depth of Binary Tree</p>
            <p><strong className="text-white">Problem:</strong> Given the root of a binary tree, return its maximum depth (the number of nodes along the longest path from root to farthest leaf node).</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`public class TreeDFS {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0; // Base case: an empty tree has depth 0
        }
        
        // Recursively find the depth of left and right subtrees
        int leftDepth = maxDepth(root.left);
        int rightDepth = maxDepth(root.right);
        
        // The max depth is the greater of the two paths, plus 1 for the current node
        return Math.max(leftDepth, rightDepth) + 1;
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(N)</code> to visit every node.</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(H)</code> where H is the height of the tree. In the worst case, it is <code className="text-gold">O(N)</code>.</p>
            </div>

            {/* Pattern 7 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">7. Modified Binary Search</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              Whenever you are given a sorted array, linked list, or matrix, and are asked to find a certain element, the best algorithm you can use is Binary Search. The "modified" aspect comes in when the array might be rotated, or you need to find the bounds of an element.
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>The array/data is sorted.</li>
              <li>You need an algorithm faster than <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-gold">O(N)</code> (typically looking for <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm text-gold">O(log N)</code>).</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Search in a Rotated Sorted Array</p>
            <p><strong className="text-white">Problem:</strong> There is an integer array nums sorted in ascending order (with distinct values), which is rotated at an unknown pivot. Given a target, find its index.</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`public class ModifiedBinarySearch {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (nums[mid] == target) return mid;
            
            // Determine which half is properly sorted
            if (nums[left] <= nums[mid]) { // Left half is sorted
                if (target >= nums[left] && target < nums[mid]) {
                    right = mid - 1; // Target is in the left half
                } else {
                    left = mid + 1;  // Target is in the right half
                }
            } else { // Right half is sorted
                if (target > nums[mid] && target <= nums[right]) {
                    left = mid + 1;  // Target is in the right half
                } else {
                    right = mid - 1; // Target is in the left half
                }
            }
        }
        return -1;
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(log N)</code>.</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(1)</code>.</p>
            </div>

            {/* Pattern 8 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">8. Top 'K' Elements (Heaps / Priority Queues)</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              Any problem that asks us to find the top/smallest/frequent K elements among a given set falls under this pattern. The best data structure to keep track of K elements is a Heap (implemented as a PriorityQueue in Java).
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Use a <strong className="text-white">Min-Heap</strong> to find the top K largest elements.</li>
              <li>Use a <strong className="text-white">Max-Heap</strong> to find the top K smallest elements.</li>
            </ul>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>You need to find the "Kth largest", "Top K frequent", or "K closest" elements.</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Kth Largest Element in an Array</p>
            <p><strong className="text-white">Problem:</strong> Given an integer array nums and an integer K, return the Kth largest element in the array.</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`import java.util.PriorityQueue;

public class TopKElements {
    public int findKthLargest(int[] nums, int k) {
        // Create a Min-Heap
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int num : nums) {
            minHeap.add(num);
            
            // If the heap exceeds size K, remove the smallest element
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        
        // The root of the min-heap is the Kth largest element
        return minHeap.peek();
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(N log K)</code> because inserting into a heap of size K takes <code className="text-gold">O(log K)</code> time.</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(K)</code> to store the heap.</p>
            </div>

            {/* Pattern 9 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">9. Backtracking (Subsets & Combinations)</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally, one piece at a time, removing those solutions that fail to satisfy the constraints of the problem at any point in time (by "backtracking").
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>The problem asks to find all possible permutations, combinations, or subsets.</li>
              <li>Keywords: "return all possible...", "generate all...".</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Subsets</p>
            <p><strong className="text-white">Problem:</strong> Given an integer array nums of unique elements, return all possible subsets (the power set).</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`import java.util.ArrayList;
import java.util.List;

public class BacktrackingPattern {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> result = new ArrayList<>();
        backtrack(result, new ArrayList<>(), nums, 0);
        return result;
    }
    
    private void backtrack(List<List<Integer>> result, List<Integer> tempList, int[] nums, int start) {
        // Add the current subset to the result
        result.add(new ArrayList<>(tempList));
        
        // Explore further elements to add to the subset
        for (int i = start; i < nums.length; i++) {
            tempList.add(nums[i]); // Choose
            backtrack(result, tempList, nums, i + 1); // Explore
            tempList.remove(tempList.size() - 1); // Un-choose (Backtrack)
        }
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(N * 2^N)</code> to generate all subsets.</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(N)</code> for the recursion stack and temporary list.</p>
            </div>

            {/* Pattern 10 */}
            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">10. Topological Sort (Graphs)</h2>
            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">The Concept</h3>
            <p>
              Topological Sort is used to find a linear ordering of elements that have dependencies on each other. For example, if task B depends on task A, task A comes before task B in the ordering. This is strictly for Directed Acyclic Graphs (DAGs).
            </p>

            <h3 className="text-xl text-white font-syne font-bold mt-8 mb-4">How to Identify It</h3>
            <ul className="list-disc pl-6 mb-8 space-y-2">
              <li>Problems involving scheduling, course prerequisites, or dependencies.</li>
              <li>Keywords: "build order", "prerequisites", "which order".</li>
            </ul>

            <p><strong className="text-white">Classic Problem:</strong> Course Schedule</p>
            <p><strong className="text-white">Problem:</strong> There are N courses to take. Some courses have prerequisites, represented by arrays of pairs [a, b] indicating you must take b before a. Is it possible to finish all courses?</p>

            <h4 className="text-lg text-white font-bold mt-6 mb-2">Java Solution</h4>
            <pre className="bg-[#0f0f0f] p-6 rounded-xl overflow-x-auto border border-white/10 mt-6 mb-4 text-sm font-mono text-gray-300">
              <code>{`import java.util.*;

public class TopologicalSort {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        int[] inDegree = new int[numCourses];
        List<List<Integer>> adjList = new ArrayList<>(numCourses);
        
        for (int i = 0; i < numCourses; i++) adjList.add(new ArrayList<>());
        
        // Build graph and calculate in-degrees
        for (int[] pre : prerequisites) {
            adjList.get(pre[1]).add(pre[0]);
            inDegree[pre[0]]++;
        }
        
        // Add nodes with 0 in-degree (no prerequisites) to queue
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) queue.add(i);
        }
        
        int count = 0;
        while (!queue.isEmpty()) {
            int current = queue.poll();
            count++;
            
            for (int neighbor : adjList.get(current)) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] == 0) {
                    queue.add(neighbor);
                }
            }
        }
        
        return count == numCourses;
    }
}`}</code>
            </pre>
            <div className="text-sm text-gray-400 mb-8 p-4 bg-white/5 rounded-xl border border-white/10">
              <p><strong className="text-white">Time Complexity:</strong> <code className="text-gold">O(V + E)</code> where V is vertices (courses) and E is edges (prerequisites).</p>
              <p><strong className="text-white">Space Complexity:</strong> <code className="text-gold">O(V + E)</code> for the adjacency list and queue.</p>
            </div>

            <h2 className="text-2xl text-white font-syne font-bold mt-12 mb-6">Final Thoughts</h2>
            <p>
              Mastering these 10 patterns won't just help you clear interviews; it will genuinely make you a much faster, more competent programmer. The next time you open a coding challenge, don't rush to type. Read the description, look for the keywords, identify the pattern, and then let your muscle memory type out the template!
            </p>
            <p className="font-bold text-white mt-8 mb-12">Happy Coding!</p>
          </div>
        </article>
      </div>
    </main>
  );
}
