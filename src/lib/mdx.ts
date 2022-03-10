import fs from 'fs'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import path from 'path'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

export const CONTENT_PATH = path.join(process.cwd(), 'src/contents')

export const getSourceOfFile = (fileName: string, type: string) => {
    return fs.readFileSync(path.join(CONTENT_PATH, type, fileName), 'utf8')
}

export const getAllContents = (type: string) => {
    return fs
        .readdirSync(path.join(CONTENT_PATH, type))
        .filter((path: string) => /\.mdx?$/.test(path))
        .map((fileName) => {
            const source = getSourceOfFile(fileName, type)
            const slug = fileName.replace(/\.mdx?$/, '')
            const { data } = matter(source)

            return {
                frontmatter: data,
                slug,
            }
        })
        .sort((a, b) => (a.frontmatter.year < b.frontmatter.year ? 1 : -1))
}

export const getSingleContent = async (slug: string, type: string) => {
    const source = getSourceOfFile(`${slug}.mdx`, type)

    const { code, frontmatter } = await bundleMDX({
        source,
        xdmOptions(options) {
            // this is the recommended way to add custom remark/rehype plugins:
            // The syntax might look weird, but it protects you in case we add/remove
            // plugins in the future.
            options.remarkPlugins = [
                ...(options.remarkPlugins ?? []),
                remarkGfm,
            ]
            options.rehypePlugins = [
                ...(options.rehypePlugins ?? []),
                rehypePrism,
            ]

            return options
        },
    })

    return {
        slug,
        frontmatter,
        code,
    }
}
