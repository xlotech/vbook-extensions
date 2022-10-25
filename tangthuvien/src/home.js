function execute() {
    return Response.success([
        {title: "Xem nhiều", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?rank=vw&time=m"},
        {title: "Đề cử", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?rank=nm&time=m"},
        {title: "Bình luận nhiều", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?rank=bl&time=m"},
        {title: "Theo dõi nhiều", script: "gen.js", input: "https://truyen.tangthuvien.vn/tong-hop?rank=td&time=m"}
    ]);
}
