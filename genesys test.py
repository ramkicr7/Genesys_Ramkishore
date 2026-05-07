def max_distinct_rectangle(m, n, k, c):
    max_area = 0
    for r1 in range(m):
        for r2 in range(r1, m):
            color_count = {}
            c1 = 0
            
            for c2 in range(n):
                for r in range(r1, r2 + 1):
                    color = c[r][c2]
                    if color in color_count:
                        color_count[color] += 1
                    else:
                        color_count[color] = 1
                
                while len(color_count) > k:
                    for r in range(r1, r2 + 1):
                        color = c[r][c1]
                        color_count[color] -= 1
                        if color_count[color] == 0:
                            del color_count[color]
                    c1 += 1
                
                current_area = (r2 - r1 + 1) * (c2 - c1 + 1)
                max_area = max(max_area, current_area)
    
    return max_area
