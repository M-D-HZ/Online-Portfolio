from prisma import Prisma
from flask import g

def get_prisma():
    if not g.get("prisma"):
        prisma = Prisma()
        prisma.connect()
        g.prisma = prisma

        return g.prisma
    else:
        prisma = Prisma()
        prisma.connect()
        return prisma