declare namespace org {
    namespace bukkit {
        namespace help {
            class HelpTopicComparator {
                public static topicNameComparatorInstance(): org.bukkit.help.HelpTopicComparator.TopicNameComparator;
                public static helpTopicComparatorInstance(): org.bukkit.help.HelpTopicComparator;
                public compare(lhs: org.bukkit.help.HelpTopic, rhs: org.bukkit.help.HelpTopic): number;
            }
        }
    }
}
