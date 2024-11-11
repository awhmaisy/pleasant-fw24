import hashlib
from multiprocessing import Pool, cpu_count
import string
import time
import itertools
from functools import partial

def try_password_batch(target_hashes, password_batch):
    results = []
    for password in password_batch:
        hash_attempt = hashlib.md5(str(password).encode('utf-8')).hexdigest()
        if hash_attempt in target_hashes:
            results.append((password, hash_attempt))
    return results

def chunk_generator(generator, chunk_size=10000):
    chunk = []
    for item in generator:
        chunk.append(item)
        if len(chunk) == chunk_size:
            yield chunk
            chunk = []
    if chunk:
        yield chunk

def crack_passwords(hash_file, max_length=10, chunk_size=10000):
    with Pool(cpu_count()) as pool:
        with open(hash_file) as f:
            target_hashes = set(line.strip() for line in f)
        
        print(f"Starting with {len(target_hashes)} hashes to crack")
        chars = string.ascii_letters + string.digits
        start_time = time.time()
        found_passwords = {}

        for length in range(1, max_length + 1):
            print(f"\nTrying length {length}...")
            if not target_hashes:  # Exit if all hashes found
                print("All hashes found! Exiting...")
                break
            
            print(f"Remaining hashes to crack: {len(target_hashes)}")    
            passwords = (''.join(p) for p in itertools.product(chars, repeat=length))
            partial_try = partial(try_password_batch, target_hashes)
            
            chunks_processed = 0
            for password_chunk in chunk_generator(passwords, chunk_size):
                chunks_processed += 1
                if chunks_processed % 100 == 0:  # Print progress every 100 chunks
                    print(f"Processed {chunks_processed} chunks of length {length}")
                
                results = pool.map(partial_try, [password_chunk])
                
                for batch_results in results:
                    for password, hash_val in batch_results:
                        elapsed = time.time() - start_time
                        print(f"Found: {password}\t{elapsed:.2f} seconds")
                        found_passwords[hash_val] = password
                        target_hashes.remove(hash_val)
                        
                        if not target_hashes:
                            print("All hashes found! Exiting...")
                            return found_passwords
        
        print(f"Completed search up to length {max_length}")
        print(f"Found {len(found_passwords)} passwords, {len(target_hashes)} hashes remaining")
        return found_passwords

if __name__ == '__main__':
    crack_passwords('hashes.txt') 